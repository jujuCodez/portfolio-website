$(document).ready(function () {
    console.log("Document ready");

    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const housingType = urlParams.get('type') || 'japanese'; // Default to 'japanese' if no parameter is present

    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        console.log("Form submitted");
        console.log("Username: ", username);
        console.log("Password: ", password);

        $.ajax({
            url: 'data/users.json', // Scan users.json for login
            dataType: 'json',
            success: function (data) {
                console.log("AJAX call successful");
                var authenticated = false;
                var loggedInUser = null;

                // Check if username and password match
                data.forEach(function (account) {
                    if (account.username === username && account.password === password) {
                        authenticated = true;
                        loggedInUser = account; // Store the logged-in user's data
                    }
                });

                if (authenticated && loggedInUser) {
                    console.log("Authentication successful");

                    // Change the content to show user's info
                    $('body').html(`
                        <video autoplay muted loop id="bg-video">
                            <source src="images/bg.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top-right-nav">
                            <div class="container-fluid position-relative">
                                <a class="navbar-brand" href="#">Welcome, ${loggedInUser.username}!</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav mx-auto">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" id="logout">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div class="container text-center">
                            <h1>Good day, ${loggedInUser.username}!</h1>
                            <img src="images/users/${loggedInUser.photo}" alt="User Photo" class="rounded-circle" style="width: 150px; height: 150px;">
                        </div>
                        <div class="container">
                            <h1>Welcome to the Admin Dashboard</h1>
                            <p>This content is only accessible after a successful login.</p>
                            <div class="chart-container" id="barChart" style="max-width:700px; height:400px"></div>
                            <div class="chart-container" id="pieChart" style="max-width:700px; height:400px"></div>
                            <div class="chart-container" id="lineChart" style="max-width:700px; height:400px"></div>
                        </div>
                    `);

                    // Apply styles for the chart containers
                    $('.chart-container').css({
                        'background-color': 'rgba(255, 255, 255, 0.8)',
                        'border-radius': '15px',
                        'padding': '20px',
                        'margin-bottom': '20px',
                        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.2)'
                    });

                    // Load Google Charts and draw the charts based on housing type
                    loadGoogleCharts(housingType);

                    // Logout functionality
                    $('#logout').on('click', function() {
                        window.location.href = 'index.html';
                    });

                } else {
                    console.log("Authentication failed");
                    $('.error').show();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Failed to fetch users.json:', textStatus, errorThrown);
            }
        });
    });
});

function loadGoogleCharts(housingType) {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(function() {
        drawCharts(housingType);
    });
}

function drawCharts(housingType) {
    var jsonFile = housingType === 'filipino' ? 'filipinoHousingData.json' : 'japaneseHousingData.json';

    $.ajax({
        url: jsonFile,
        dataType: 'json',
        success: function (chartData) {
            // Bar Chart
            var barData = google.visualization.arrayToDataTable(chartData.barChartData);

            var barOptions = {
                title: 'Average House Prices in Major Cities',
                fontName: 'Arial',
                fontSize: 14,
                hAxis: {
                    title: 'City',
                    textStyle: { color: '#333' }
                },
                vAxis: {
                    title: 'Price (Currency in Millions)',
                    minValue: 0,
                    textStyle: { color: '#333' }
                },
                colors: ['#1b9e77'],
                chartArea: { width: '50%' },
                backgroundColor: 'transparent'
            };

            var barChart = new google.visualization.BarChart(document.getElementById('barChart'));
            barChart.draw(barData, barOptions);

            // Pie Chart
            var pieData = google.visualization.arrayToDataTable(chartData.pieChartData);

            var pieOptions = {
                title: 'Market Share of Real Estate Companies',
                fontName: 'Arial',
                fontSize: 14,
                is3D: true,
                colors: ['#ff5722', '#4caf50', '#2196f3', '#ff9800', '#607d8b'],
                backgroundColor: 'transparent'
            };

            var pieChart = new google.visualization.PieChart(document.getElementById('pieChart'));
            pieChart.draw(pieData, pieOptions);

            // Line Chart
            var lineData = google.visualization.arrayToDataTable(chartData.lineChartData);

            var lineOptions = {
                title: 'House Prices Over Time',
                fontName: 'Arial',
                fontSize: 14,
                hAxis: {
                    title: 'Year',
                    textStyle: { color: '#333' }
                },
                vAxis: {
                    title: 'Average Price (Currency in Millions)',
                    minValue: 0,
                    textStyle: { color: '#333' }
                },
                legend: 'none',
                colors: ['#e91e63'],
                backgroundColor: 'transparent',
                chartArea: { width: '50%' }
            };

            var lineChart = new google.visualization.LineChart(document.getElementById('lineChart'));
            lineChart.draw(lineData, lineOptions);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Failed to fetch ' + jsonFile + ':', textStatus, errorThrown);
        }
    });
}
