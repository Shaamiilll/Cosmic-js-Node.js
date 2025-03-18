// Routes
console.log("Initializing routes...");

module.exports = (app, config, bucket, partials, _) => {
  console.log("Loading home route...");
  require('./home')(app, config, bucket, partials, _);

  console.log("Loading blog route...");
  require('./blog')(app, config, bucket, partials, _);

  console.log("Loading contact route...");
  require('./contact')(app, config, bucket, partials, _);

  console.log("Loading search route...");
  require('./search')(app, config, bucket, partials, _);

  console.log("Loading faqs route...");
  require('./faqs')(app, config, bucket, partials, _);

  console.log("Loading page route...");
  require('./page')(app, config, bucket, partials, _);
};
