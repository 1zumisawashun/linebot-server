import jsonServer from "json-server";
const server = jsonServer.create();

const authUser = {
  id: "1",
  username: "taketo",
  displayName: "Taketo Yoshida",
  email: "taketo@example.com",
  profileImageUrl: "/users/1.png",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
};

server.post("/auth/signin", (req, res) => {
  if (
    !(req.body["username"] === "user" && req.body["password"] === "password")
  ) {
    return res.status(401).json({
      message: "Username or password are incorrect",
    });
  }

  res.cookie("token", "dummy_token", {
    maxAge: 3600 * 1000,
    httpOnly: true,
  });
  res.status(201).json(authUser);
});

server.post("/auth/signout", (req, res) => {
  res.cookie("token", "", {
    maxAge: 0,
    httpOnly: true,
  });
  res.status(200).json({
    message: "Sign out successfully",
  });
});

server.post("/purchases", (req, res) => {
  if (req.cookies["token"] !== "dummy_token") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  res.status(201).json({
    message: "ok",
  });
});

server.get("/users/me", (req, res) => {
  if (req.cookies["token"] !== "dummy_token") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  res.status(200).json(authUser);
});

export default server;
