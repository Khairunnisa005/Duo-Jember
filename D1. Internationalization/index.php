<?php
// Function to load language data from JSON file
function loadLanguage($langCode) {
    $json = file_get_contents('languages.json');
    $data = json_decode($json, true);
    return isset($data[$langCode]) ? $data[$langCode] : [];
}

// Default language
$defaultLanguage = 'en';

// Load language based on user selection or use default language
$currentLanguage = isset($_GET['lang']) ? $_GET['lang'] : $defaultLanguage;
$languageData = loadLanguage($currentLanguage);

// Function to translate text
function translate($key, $languageData) {
    return isset($languageData[$key]) ? $languageData[$key] : $key;
}
?>

<!DOCTYPE html>
<html lang="<?php echo $currentLanguage; ?>">
<head>
    <meta charset="UTF-8">
    <title>Language Translation Example</title>
</head>
<body>
    <h1><?php echo translate('hello', $languageData); ?>, <?php echo translate('world', $languageData); ?>!</h1>

    <!-- Language selection form -->
    <form action="" method="get">
        <select name="lang">
            <option value="en" <?php if($currentLanguage == 'en') echo 'selected'; ?>>English</option>
            <option value="fr" <?php if($currentLanguage == 'fr') echo 'selected'; ?>>French</option>
            <option value="id" <?php if($currentLanguage == 'id') echo 'selected'; ?>>Indonesia</option>
            <!-- Add more languages as needed -->
        </select>
        <input type="submit" value="Change Language">
    </form>
</body>
</html>
