import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { helloWorld } from "./hello-world/resource";

defineBackend({
	auth,
	data,
	helloWorld,
});
