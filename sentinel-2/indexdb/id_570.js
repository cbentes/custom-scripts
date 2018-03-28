//
// Misra Soil Brightness Index  (abbrv. MSBI)
//
// General formula: 0.406*[500:600] + 0.600*[600:700] + 0.645*[700:800] + 0.243*[800:1100]
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=570
//

let index = 0.406 * B03 + 0.6 * B04 + 0.645 * B06 + 0.243 * B09;
let min = 0.14;
let max = 0.637;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.

let underflow_color = [1, 1, 1];
let low_color = [208/255, 88/255, 126/255];
let high_color = [241/255, 234/255, 200/255];
let overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, max],
[
	underflow_color,
	low_color,
	high_color,
	//overflow_color // uncomment to see overflows
]);
