## Install

Go to your marketplace root directory (ie. `marketplace-example`) and install module:

    npm i @platform-os/longtail-api

Include `longtail/widget_links` to the homepage and listing show page.

You can use the code below:

    <div id="longtail-widget-home">
        <div class="container">
            <ul id="longtail-links">
                {% include 'longtail/widget_links' %}
            </ul>
        </div>
    </div>
