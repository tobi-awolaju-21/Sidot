
  // Make an AJAX request to fetch the content from the Instagram URL
  $.ajax({
    url: "https://www.instagram.com/sidotart/",
    method: "GET",
    success: function(data) {
      // Extract the content you want to display
      var content = $(data).find('.class-or-id-of-element-to-display').html();

      // Display the content in the specified div
      $("#instagramContent").html(content);
    },
    error: function() {
      // Handle errors
      console.error("Error fetching Instagram content");
    }
  });