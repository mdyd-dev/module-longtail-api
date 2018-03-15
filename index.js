const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');

const isEmpty = input => (input.length === 0 ? console.log(chalk.red('\nCant be empty')) : true);

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'token',
        message: 'Please provide your LongtailUX API token:',
        validate: isEmpty
      }
    ];

    return this.prompt(prompts).then(props => (this.props = props));
  }

  writing() {
    this.fs.copyTpl(this.templatePath('.'), this.destinationPath('../..'), this.props);
  }

  install() {
    console.log(chalk.green('Longtail :: Installing'));
  }

  end() {
    console.log(chalk.green('Longtail :: Module files generated'));

    const postMessage = `Please remember to include longtail/widget_links to the homepage and listing show page. \
    You can use the script below:

      <div id="longtail-widget-home">
        <div class="container">
          <h2>Your Header</h2>
          <ul id="longtail-links">
            {% include 'longtail/widget_links' %}
          </ul>
        </div>
      </div>
`;
    console.log(chalk.red(postMessage));
  }
};
