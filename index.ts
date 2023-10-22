#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StaticSite } from "./static-site";

class MyStaticSiteStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
        super(parent, name, props)

        new StaticSite(this, 'StaticSite', {
            domainName: this.node.tryGetContext('domain'),
            siteSubDomain: this.node.tryGetContext('subdomain'),
        });
    }
}
const app = new cdk.App();

new MyStaticSiteStack(app, 'MyStaticSiteStack', {
    env: {
        account: app.node.tryGetContext('accountId'),
        region: 'us-east-1'
    }
});

app.synth();