module.exports = {
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig.favicon-absolute);
        },
        "page:before": function(page) {
            this.log.debug.ln('page:before', JSON.stringify(page.content));

            return page;
        },
        "page": function(page) {
            this.log.debug.ln('page', JSON.stringify(page.content));

            return page;
        },
        "finish:before": function() {
            this.log.debug.ln('finish:before', this.options.pluginsConfig.favicon-absolute);
        },
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig.favicon-absolute);
        }
    }
};