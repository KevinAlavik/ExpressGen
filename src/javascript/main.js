document.addEventListener('DOMContentLoaded', function() {
    const expressgen = {
        versionText: document.getElementById('express-version'),
        config: {
            file: "config.json"
        }
    };

    let loadedConfig = {}; // Variable to store the loaded config file

    function loadConfig(config) {
        return fetch(config)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error loading config file: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                loadedConfig = data;
                console.log('Config file loaded successfully:', loadedConfig);
                return data; // Resolve the promise with the loaded config data
            })
            .catch(error => {
                console.error(error);
            });
    }

    loadConfig(expressgen.config.file)
        .then(config => {
            expressgen.versionText.innerHTML = `v${config.version}, Codename: ${config.codeName}`;
        });

        // Get all buttons and anchors on the page
    const elements = document.querySelectorAll('button, a, i');

    // Loop through the elements and add click event listener
    elements.forEach(element => {
    if (!element.getAttribute('onclick')) {
        element.addEventListener('click', () => {
        alert('Working on it!');
        });
    }
    });

});
