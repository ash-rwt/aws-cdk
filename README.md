## Prep

The domain for the static site (i.e. mystaticsite.com) must be configured as a hosted zone in Route53 prior to deploying this example. For instructions on configuring Route53 as the DNS service for your domain, see the [Route53 documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring.html).

## Deploy

```shell
$ npm install -g aws-cdk
$ npm install
$ npm run build
$ cdk deploy -c accountId=<Account_Id> -c domain=<domainname> -c subdomain=<subdomain>

e.g --> $ cdk deploy -c accountId=123456789 -c domain=example.com -c subdomain=www
```