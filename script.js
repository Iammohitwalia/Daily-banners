   // Array of image element IDs for each day of the week (Sunday = image-1, Monday = image-2, etc.)
    const bannerIds = [
        "image-1", // Sunday
        "image-2", // Monday
        "image-3", // Tuesday
        "image-4", // Wednesday
        "image-5", // Thursday
        "image-6", // Friday
        "image-7"  // Saturday
    ];

    // Get the current day of the week in UTC (0 = Sunday, 6 = Saturday)
    const today = new Date().getUTCDay();

    // Loop through all the banner images and hide them initially
    const banners = document.querySelectorAll('.image-banner');
    banners.forEach(banner => {
        banner.classList.add('hide-banner-img');
    });

    // Display the banner for today
    const todayBanner = document.getElementById(bannerIds[today]);
    if (todayBanner) {
        todayBanner.classList.remove('hide-banner-img');
    }
