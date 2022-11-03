import Bootstrap from "./apps/bootstrap";

const bootstrap = new Bootstrap();
bootstrap.run(port => console.log(`Server started and running on port ${port}.`));