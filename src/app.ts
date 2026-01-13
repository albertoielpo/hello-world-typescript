(async () => {
    console.log("hello world");
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
