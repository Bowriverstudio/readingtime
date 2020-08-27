# Reading time contributions

This package is created to support mindbloome and is opened source. It is designed to use eslister, sonarqube, and storybook to ensure top code quality.

## Commits Process

```bash
npx changeset
npx changeset version
git status .
```

```bash
npm publish
```

## Unit Testing

```bash
npm test
```

## Storybook Testing

```bash
npm test
```

## SonarQube

Ensure Version is same as package

```bash
sonar-scanner
```

## Update to latest version

```bash
npm install @bowriverstudio/readingtime@latest
```

## npm link

```bash
cd PATH/packages/readingtime
# Step 1.
npm link
cd ~/PATH/my-app
# Step 2.
npm link @bowriverstudio/readingtime
```
