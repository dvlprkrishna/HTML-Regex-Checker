// Runs the script on current tab
chrome.tabs.executeScript({
    // fetchs html content
    code: "document.getElementsByTagName('html')[0].innerHTML;"
},
function(scrapeddata) {
    // format data to string
    unFormattedStr = JSON.stringify(scrapeddata); 
    // Trims out whitespace etc.
    formattedStr = unFormattedStr.replace(/\\n+\s+|\\/g, '');

    // page formatted source code
    console.log(formattedStr);

    var titleRegex = /<title>.+?<\/title>/gmi; 
    var c = formattedStr.match(titleRegex);
    var cdata = JSON.stringify(c).replace(/<title>|<\/title>|[\[\]\"]/g,'');
    console.log("==",cdata) ;
    $('#titleCheck').text('');
    $('#titleCheck').append(`
        <td><b>Title Tag</b></td>
        <td>${cdata}</td>
        <td>${(cdata.length > 65)? `<span class="mini-box chkfail">&nbsp;</span> ${cdata.length} characters`: `<span class="mini-box chkpass">&nbsp;</span> ${cdata.length} characters` }</td>
    `);
    $('#titleCheckDesc').append(`Your HTML title tag appears in browser tabs, bookmarks and in search result pages. should be less than 65 characters`)


    
});
 