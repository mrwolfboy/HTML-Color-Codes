document.addEventListener('DOMContentLoaded', function () {
    const colorCodes = document.getElementById('color-codes');
    const searchInput = document.getElementById('searchInput');

    // Sample color data
    const colors = [ 
    { name: 'Black Blue', code: '#040720' },
    { name: 'Night', code: '#0C090A' },
    { name: 'Charcoal', code: '#34282C' },
    { name: 'Oil', code: '#3B3131' },
    { name: 'Dark Gray', code: '#3A3B3C' },
    { name: 'Light Black', code: '#454545' },
    { name: 'Red', code: '#FF0000' },
    { name: 'Black Cat', code: '#413839' },
    { name: 'Iridium', code: '#3D3C3A' },
    { name: 'Black Eel', code: '#463E3F' },
    { name: 'Black Cow', code: '#4C4646' },
    { name: 'Gray Wolf', code: '#504A4B' },
    { name: 'Vampire Gray', code: '#565051' },
    { name: 'Iron Gray', code: '#52595D' },
    { name: 'Gray Dolphin', code: '#5C5858' },
    { name: 'Carbon Gray', code: '#625D5D' },
    { name: 'Ash Gray', code: '#666362' },
    { name: 'DimGray', code: '#696969' },
    { name: 'Nardo Gray', code: '#686A6C' },
    { name: 'Cloudy Gray', code: '#6D6968' },
    { name: 'Smokey Gray', code: '#726E6D' },
    { name: 'Alien Gray', code: '#736F6E' },
    { name: 'Sonic Silver', code: '#757575' },
    { name: 'Platinum Gray', code: '#797979' },
    { name: 'Granite', code: '#837E7C' },
    { name: 'Gray', code: '#808080' },
    { name: 'Battleship Gray', code: '#848482' },
    { name: 'Dark Gainsboro', code: '#8C8C8C' },
    { name: 'Gunmetal Gray', code: '#8D918D' },
    { name: 'DarkGray', code: '#A9A9A9' },
    { name: 'Gray Cloud', code: '#B6B6B4' },
    { name: 'Silver', code: '#C0C0C0' },
    { name: 'Pale Silver', code: '#C9C0BB' },
    { name: 'Gray Goose', code: '#D1D0CE' },
    { name: 'Platinum Silver', code: '#CECECE' },
    { name: 'LightGray', code: '#D3D3D3' },
    { name: 'Silver White', code: '#DADBDD' },
    { name: 'Gainsboro', code: '#DCDCDC' },
    { name: 'Platinum', code: '#E5E4E2' },
    { name: 'Metallic Silver', code: '#BCC6CC' },
    { name: 'Blue Gray', code: '#98AFC7' },
    { name: 'Roman Silver', code: '#838996' },
    { name: 'LightSlateGray', code: '#778899' },
    { name: 'SlateGray', code: '#708090' },
    { name: 'Rat Gray', code: '#6D7B8D' },
    { name: 'Slate Granite Gray', code: '#657383' },
    { name: 'Jet Gray', code: '#616D7E' },
    { name: 'Mist Blue', code: '#646D7E' },
    { name: 'Marble Blue', code: '#566D7E' },
    { name: 'Slate Blue Grey', code: '#737CA1' },
    { name: 'Light Purple Blue', code: '#728FCE' },
    { name: 'Azure Blue', code: '#4863A0' },
    { name: 'Estoril Blue', code: '#2F539B' },
    { name: 'Blue Jay', code: '#2B547E' },
    { name: 'Charcoal Blue', code: '#36454F' },
    { name: 'Dark Blue Grey', code: '#29465B' },
    { name: 'Dark Slate', code: '#2B3856' },
    { name: 'Deep-Sea Blue', code: '#123456' },
    { name: 'Night Blue', code: '#151B54' },
    { name: 'MidnightBlue', code: '#191970' },
    { name: 'Navy', code: '#000080' },
    { name: 'Medium Slate Blue', code: '#7B68EE' },
    { name: 'Slate Blue', code: '#6A5ACD' },
    { name: 'Medium Purple Blue', code: '#836FFF' },
    { name: 'Twilight Lavender', code: '#4E5180' },
    { name: 'MediumSlateBlue', code: '#7B68EE' },
    { name: 'Blueberry Blue', code: '#3F26BF' },
    { name: 'Royal Blue', code: '#4169E1' },
    { name: 'Purple Navy', code: '#4E5180' },
    { name: 'Indigo', code: '#4B0082' },
    { name: 'Medium Navy Blue', code: '#343471' },
    { name: 'Blue Orchid', code: '#1F45FC' },
    { name: 'Ball Blue', code: '#21618C' },
    { name: 'Blue', code: '#0000FF' },
    { name: 'Medium Blue', code: '#0000CD' },
    { name: 'Ivy Blue', code: '#003366' },
    { name: 'Medium Midnight Blue', code: '#003366' },
    { name: 'Deep Blue', code: '#000080' },
    { name: 'Cool Black', code: '#002E63' },
    { name: 'Dark Royal Blue', code: '#002366' },
    { name: 'Dark Blue', code: '#00008B' },
    { name: 'Blue Whale', code: '#001245' },
    { name: 'Lapis Blue', code: '#15317E' },
    { name: 'Navy Blue', code: '#000080' },
    { name: 'Blue Ribbon', code: '#0066CC' },
    { name: 'Blue Dress', code: '#0066FF' },
    { name: 'Dodger Blue', code: '#1E90FF' },
    { name: 'Royal Azure', code: '#003366' },
    { name: 'Azure', code: '#007FFF' },
    { name: 'Rich Electric Blue', code: '#001F3F' },
    { name: 'Steel Blue', code: '#4682B4' },
    { name: 'Medium Electric Blue', code: '#003399' },
    { name: 'Baby Blue', code: '#89CFF0' },
    { name: 'Sky Blue', code: '#87CEEB' },
    { name: 'LightSkyBlue', code: '#87CEFA' },
    { name: 'Iceberg', code: '#7EC8E3' },
    { name: 'Crystal Blue', code: '#5A7D9A' },
    { name: 'DeepSkyBlue', code: '#00BFFF' },
    { name: 'Denim Blue', code: '#2243B6' },
    { name: 'Navy Blue', code: '#0066CC' },
    { name: 'Blue Eyes', code: '#1560BD' },
    { name: 'Light Blue', code: '#ADD8E6' },
    { name: 'Curious Blue', code: '#3D85C6' },
    { name: 'Sky', code: '#76D7EA' },
    { name: 'Malibu', code: '#7ED4E6' },
    { name: 'Blue Lagoon', code: '#4FA3D1' },
    { name: 'Celestial Blue', code: '#2E86C1' },
    { name: 'Azure Radiance', code: '#0077A7' },
    { name: 'Babylon Blue', code: '#506C7F' },
    { name: 'Ice Cap Blue', code: '#92A1AB' },
    { name: 'SteelBlue', code: '#4682B4' },
    { name: 'Blue Lotus', code: '#4997D0' },
    { name: 'Columbia Blue', code: '#9BDDFF' },
    { name: 'Baby Blue Eyes', code: '#A1CAF1' },
    { name: 'Blue Yonder', code: '#50729F' },
    { name: 'Non-Photo Blue', code: '#A4DDED' },
    { name: 'Sky Blue', code: '#80DAEB' },
    { name: 'Maya Blue', code: '#73C2FB' },
    { name: 'Glacial Blue Ice', code: '#81D8D0' },
    { name: 'Pale Blue', code: '#AFEEEE' },
    { name: 'Magic Mint', code: '#AAF0D1' },
    { name: 'Light Cyan', code: '#E0FFFF' },
    { name: 'PowderBlue', code: '#B0E0E6' },
    { name: 'Mystic Maroon', code: '#837E7C' },
    { name: 'Glaucous', code: '#6082B6' },
    { name: 'Sapphire Blue', code: '#0D5EAF' },
    { name: 'Capri', code: '#00BFFF' },
    { name: 'Vista Blue', code: '#7C9ED9' },
    { name: 'Cornflower Blue', code: '#6495ED' },
    { name: 'Baby Powder', code: '#FEFEFA' },
    { name: 'Pale Cornflower Blue', code: '#ABCDEF' },
    { name: 'Periwinkle', code: '#CCCCFF' },
    { name: 'Blue Angel', code: '#B0C4DE' },
    { name: 'Carolina Blue', code: '#56A0D3' },
    { name: 'Powder Blue', code: '#B0E0E6' },
    { name: 'Celeste', code: '#B2FFFF' },
    { name: 'Baby Blue', code: '#89CFF0' },
    { name: 'Lavender Blue', code: '#8B8CFF' },
    { name: 'Blue Bonnet', code: '#1C1CF0' },
    { name: 'Medium Purple Blue', code: '#4F69C6' },
    { name: 'Livid Blue', code: '#2E2E5E' },
    { name: 'Royal Blue', code: '#4169E1' },
    { name: 'Blue Ribbon', code: '#0066CC' },
    { name: 'Blue Dress', code: '#0066FF' },
    { name: 'Sapphire', code: '#0F52BA' },
    { name: 'Hershey Blue', code: '#21303E' },
    { name: 'Royal Blue', code: '#002366' },
    { name: 'Blue Stratos', code: '#182B49' },
    { name: 'Navy Blue', code: '#001F3F' },
    // Add more color codes as needed

    ];

    // Function to render color codes
    function renderColorCodes(colorArray) {
        colorCodes.innerHTML = '';

        const colorsToRender = colorArray || colors;

        colorsToRender.forEach(color => {
            const colorCodeElement = document.createElement('div');
            colorCodeElement.classList.add('color-code');

            colorCodeElement.innerHTML = `
                <div class="color-sample" style="background-color: ${color.code};"></div>
                <div class="color-name">${color.name}</div>
                <div class="color-code-text">${color.code}</div>
                <button class="copy-button">Copy</button>
            `;

            colorCodes.appendChild(colorCodeElement);
        });
    }

    // Initial rendering
    renderColorCodes();

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredColors = colors.filter(color => color.name.toLowerCase().includes(searchTerm));
        renderColorCodes(filteredColors);
    });

    // Event delegation for copy button
    colorCodes.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('copy-button')) {
            const colorCodeText = target.parentElement.querySelector('.color-code-text').innerText;
            copyToClipboard(colorCodeText, target);
        }
    });

    // Function to copy color code to clipboard
    function copyToClipboard(text, button) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Change button text to 'Copied!'
        button.innerText = 'Copied!';
        button.disabled = true;

        // Reset button text after a short delay (e.g., 2 seconds)
        setTimeout(function () {
            button.innerText = 'Copy';
            button.disabled = false;
        }, 2000);
    }
});