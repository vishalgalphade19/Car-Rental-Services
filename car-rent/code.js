<script>
    $(document).ready(function () {
        // Handle button clicks
        $('.nav-link').on('click', function () {
            // Get the target tab-pane ID from the data-bs-target attribute
            var targetId = $(this).data('bs-target');

            // Hide all tab-panes
            $('.tab-pane').removeClass('show active');

            // Show the selected tab-pane
            $(targetId).addClass('show active');
        })
    });
</script>
