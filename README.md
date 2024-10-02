
# Daily Banner Display in Webflow

## Overview
This guide describes how to implement a daily banner display in Webflow using JavaScript. Each day of the week has a corresponding banner image that is displayed based on the current day. The rest of the banners are hidden.

## Prerequisites
- Basic understanding of Webflow.
- Access to the Webflow Designer.
- Familiarity with JavaScript and the Webflow interface.

## Implementation Steps

### Step 1: Set Up Banner Images in Webflow

1. **Create a New Section:**
   - In the Webflow Designer, create a new section where you want to display the banners.

2. **Add Image Elements:**
   - Within the new section, add a series of image elements for each day of the week. You will need a total of 7 images.
   - Upload and select the images corresponding to each day.

3. **Assign IDs to Images:**
   - Click on each image and assign the following IDs:
     - Image for Sunday: `image-1`
     - Image for Monday: `image-2`
     - Image for Tuesday: `image-3`
     - Image for Wednesday: `image-4`
     - Image for Thursday: `image-5`
     - Image for Friday: `image-6`
     - Image for Saturday: `image-7`

4. **Add a Class for Hiding Banners:**
   - Create a new CSS class called `.hide-banner-img` and set the following styles:
     ```css
     .hide-banner-img {
         display: none; /* Hides the banner */
     }
     ```

### Step 2: Add Custom Code

1. **Access the Page Settings:**
   - Open the page where the banners are located.
   - Scroll down to the **Custom Code** section.

2. **Insert JavaScript:**
   - In the **Before </body> tag** section, insert the following JavaScript code:

   ```javascript
   <script>
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
   </script>
   ```

### Step 3: Publish Your Changes

1. **Save and Publish:**
   - After inserting the code, save your changes.
   - Publish the site to see the daily banner display in action.

## Troubleshooting

- **Banners Not Displaying:**
  - Ensure that the IDs assigned to the images match the IDs in the JavaScript code.
  - Make sure the `.hide-banner-img` class is applied correctly to all banner images.

- **JavaScript Errors:**
  - Check the console for any JavaScript errors that may prevent the code from executing.

## Conclusion
Following the steps outlined in this guide will allow you to implement a daily banner display in Webflow. This feature enhances user engagement by showcasing different content based on the day of the week.
