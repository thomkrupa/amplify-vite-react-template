import { defineBackend } from "@aws-amplify/backend";
import { Function, FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { helloWorld } from "./hello-world/resource";

const backend = defineBackend({
	auth,
	data,
	helloWorld,
});

const myFunc = backend.helloWorld.resources.lambda as Function;

myFunc.addFunctionUrl({
	authType: FunctionUrlAuthType.AWS_IAM,
});
