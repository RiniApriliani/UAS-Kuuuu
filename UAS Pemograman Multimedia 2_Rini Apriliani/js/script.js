$(document).ready(function () {
    function showData(data) {
        var tbody = $('tbody');
        tbody.empty();

        for (var i = 0; i < data.length; i++) {
            var row = '<tr>';
            row += '<td>' + data[i].nomor + '</td>';
            row += '<td>' + data[i].nama + '</td>';
            row += '<td>' + data[i].asma + '</td>';
            row += '<td>' + data[i].ayat + '</td>';
            row += '<td>' + data[i].arti + '</td>';
            row += '<td>' + data[i].urut + '</td>';
            row += '<td>' + data[i].type + '</td>';
            row += '<td>' + data[i].keterangan + '</td>';
            row += '</tr>';
            tbody.append(row);
        }
    }
    

    $('button').click(function () {
        var searchTerm = $('input').val().toLowerCase();
        var apiEndpoint = 'https://al-quran-8d642.firebaseio.com/data.json?print=pretty'; // Replace with the actual URL of your JSON API

        $.get(apiEndpoint, function (apiData) {
            var filteredData = apiData.filter(function (alquran) {
                return alquran.nama.toLowerCase().includes(searchTerm) ||
                    alquran.asma.toLowerCase().includes(searchTerm) ||
                    alquran.ayat.toLowerCase().includes(searchTerm) ||
                    alquran.arti.toLowerCase().includes(searchTerm) ||
                    alquran.urut.toLowerCase().includes(searchTerm) ||
                    alquran.type.toLowerCase().includes(searchTerm) ||
                    alquran.keterangan.toLowerCase().includes(searchTerm);
            });

            showData(filteredData);
        });
    });

    // Load all data when the page first loads
    var initialApiEndpoint = 'https://al-quran-8d642.firebaseio.com/data.json?print=pretty'; // Replace with the actual URL of your JSON API
    $.get(initialApiEndpoint, function (initialData) {
        showData(initialData);
    });
});
