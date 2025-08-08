window.onload = () => {
    try {
        // Get the timestamp of midnight.
        const timestamp = new Date().setHours(0, 0, 0, 0);

        let storedTimestamp = localStorage.getItem('timestamp');
        let storedIndex = localStorage.getItem('index');

        let index;
        if (storedTimestamp === timestamp.toString()) {
            // Use the stored index.
            index = parseInt(storedIndex);
        } else {
            do {
                // Pick a new random index.
                index = Math.floor(Math.random() * urls.length);
            } while (index === storedIndex);

            // Store the timestamp and index.
            localStorage.setItem('timestamp', timestamp.toString());
            localStorage.setItem('index', index.toString());
        }

        window.location.href = urls[index];

    } catch (error) {
        alert(error);
    }
};
