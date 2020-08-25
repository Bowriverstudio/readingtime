# Generated Data

Sample WordPress posts are captured via curl.

https://test.frontity.org/wp-json/wp/v2/posts/

## Dependencies

brew install jq

## Script

export default

```bash
curl https://test.frontity.org/wp-json/wp/v2/posts/23 | jq -r .content > 23.js
curl https://test.frontity.org/wp-json/wp/v2/posts/42 | jq -r .content > 42.js
curl https://test.frontity.org/wp-json/wp/v2/posts/60 | jq -r .content > 60.js

```

prepend: export default
