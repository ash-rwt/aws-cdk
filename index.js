#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const static_site_1 = require("./static-site");
class MyStaticSiteStack extends cdk.Stack {
    constructor(parent, name, props) {
        super(parent, name, props);
        new static_site_1.StaticSite(this, 'StaticSite', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBbUM7QUFDbkMsK0NBQTJDO0FBRTNDLE1BQU0saUJBQWtCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDckMsWUFBWSxNQUFlLEVBQUUsSUFBWSxFQUFFLEtBQXFCO1FBQzVELEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRTFCLElBQUksd0JBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztTQUN0RCxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUUxQixJQUFJLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxtQkFBbUIsRUFBRTtJQUM1QyxHQUFHLEVBQUU7UUFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxXQUFXO0tBQ3RCO0NBQ0osQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xyXG5pbXBvcnQgeyBTdGF0aWNTaXRlIH0gZnJvbSBcIi4vc3RhdGljLXNpdGVcIjtcclxuXHJcbmNsYXNzIE15U3RhdGljU2l0ZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogY2RrLkFwcCwgbmFtZTogc3RyaW5nLCBwcm9wczogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwYXJlbnQsIG5hbWUsIHByb3BzKVxyXG5cclxuICAgICAgICBuZXcgU3RhdGljU2l0ZSh0aGlzLCAnU3RhdGljU2l0ZScsIHtcclxuICAgICAgICAgICAgZG9tYWluTmFtZTogdGhpcy5ub2RlLnRyeUdldENvbnRleHQoJ2RvbWFpbicpLFxyXG4gICAgICAgICAgICBzaXRlU3ViRG9tYWluOiB0aGlzLm5vZGUudHJ5R2V0Q29udGV4dCgnc3ViZG9tYWluJyksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcclxuXHJcbm5ldyBNeVN0YXRpY1NpdGVTdGFjayhhcHAsICdNeVN0YXRpY1NpdGVTdGFjaycsIHtcclxuICAgIGVudjoge1xyXG4gICAgICAgIGFjY291bnQ6IGFwcC5ub2RlLnRyeUdldENvbnRleHQoJ2FjY291bnRJZCcpLFxyXG4gICAgICAgIHJlZ2lvbjogJ3VzLWVhc3QtMSdcclxuICAgIH1cclxufSk7XHJcblxyXG5hcHAuc3ludGgoKTsiXX0=