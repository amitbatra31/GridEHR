const changeUploadFile = async (e) => {
    try {
        console.log("dkfnjd");
        e.preventDefault();
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch('http://localhost:5001/api/v0/add', {
            method: 'POST',
            body: formData,
        });
        var datax = await $.get('http://localhost:8080/ipfs/' + recordHash);
        var data = await response.json();
        ipfsHash_report = data.Hash;
        datax["Report"] = `http://localhost:8080/ipfs/${ipfsHash_report}`;
        var ipfs = window.IpfsApi('localhost', '5001');
        publicKey = web3.currentProvider.selectedAddress;
        publicKey = publicKey.toLowerCase();
        const Buffer = window.IpfsApi().Buffer;
        const name = a;
        const age = b.c[0];
        const savedata = datax;
        console.log("savedd: ", savedata);
        var buffer = Buffer(JSON.stringify(savedata));

        ipfs.files.add(buffer, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log('result:' + result);
                recordHash = result[0].hash;
                $('#recordsHash').html(
                    `http://localhost:8080/ipfs/${recordHash}`,
                );
                $('#recordsHash').attr(
                    'href',
                    `http://localhost:8080/ipfs/${recordHash}`,
                );
                const designation = 0; //patient
                console.log(name, age, designation, recordHash);
                contractInstance.add_details(
                    name,
                    age,
                    designation,
                    recordHash,
                    { gas: 2000000 },
                    (err, res) => {
                        if (!err) {
                            console.log('Successfully added report');
                        } else {
                            console.log(err);
                        }
                    },
                );
            }
        });

    } catch (error) {
        console.error('Error uploading file:', error);
        uploadStatus.textContent =
            'An error occurred while uploading the file.';
    }
}
const changeScannedImage = async (e) => {
    try {
        console.log("sfdvjkbsvf");
        e.preventDefault();
        var data2 = await $.get('http://localhost:8080/ipfs/' + recordHash);
        data2["Scanned_Image"] = $("#outputImageScanned")?.attr("src");
        var ipfs = window.IpfsApi('localhost', '5001');
        publicKey = web3.currentProvider.selectedAddress;
        publicKey = publicKey.toLowerCase();
        const Buffer = window.IpfsApi().Buffer;
        const name = a;
        const age = b.c[0];
        const savedata = data2;
        var buffer = Buffer(JSON.stringify(savedata));

        ipfs.files.add(buffer, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log('result:' + result);
                recordHash = result[0].hash;
                $('#recordsHash').html(
                    `http://localhost:8080/ipfs/${recordHash}`,
                );
                $('#recordsHash').attr(
                    'href',
                    `http://localhost:8080/ipfs/${recordHash}`,
                );
                const designation = 0; //patient
                console.log(name, age, designation, recordHash);
                contractInstance.add_details(
                    name,
                    age,
                    designation,
                    recordHash,
                    { gas: 2000000 },
                    (err, res) => {
                        if (!err) {
                            console.log('Successfully added report');
                        } else {
                            console.log(err);
                        }
                    },
                );
            }
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        uploadStatus.textContent =
            'An error occurred while uploading the file.';
    }
}
