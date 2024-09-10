I'm using WXT as the boilerplate. It has nothing to do with ESLint and
it doesn't come with any ESLint dependencies or configurations.

Install the dependencies and then run the `lint` script with whatever
package manager you are using. You'll see that ESLint detects the type
parameters in the Svelte component against the `no-undef` rule.

I'm not sure if this on the plugin to solve or the user has to hack
around their own ESLint configuration file.
