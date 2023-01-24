// import jwt from "jsonwebtoken";

// export const verifyToken = async (req, res, next) => {
//   const authHeader = req.headers.token;
//   const token = authHeader.split(" ")[1];
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];

//     jwt.verify(token, process.env.JWT_SEC, (err, user) => {
//       if (err) {

//         res.status(403).json("Token is not valid!")
//       };
//       req.user = user;
//       next();
//     });

//   } else {
//     return res.status(401).json("You are not authenticated!");
//   }
// };

// export const verifyTokenAndAuthorization = async (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.id === req.params.id || req.user?.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You are not allowed to do that!");
//     }
//   });
// };

// export const verifyTokenAndAdmin = async (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user?.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You are not allowed to do that!");
//     }
//   });
// };

import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res.status(401).json("You are not authenticated!");
  }
  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SEC);
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
};

export const verifyTokenAndAuthorization = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user?.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not allowed to do that!");
    }
  });
};

export const verifyTokenAndAdmin = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user?.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not allowed to do that!");
    }
  });
};
