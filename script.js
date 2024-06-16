
function checkVowels()
{
    let text = document.getElementById("word").value;
    text = text.toLowerCase();
    let counter = 0;
    for(let i =0 ;i<text.length;i++)
        {
            let char = text.charAt(i)

            counter+=isVawel(char);
        }
        let result = document.getElementById("result")
        result.textContent = "Total vawels :" + counter;
}

function isVawel(char)
{
    const vawel = ["a","e","o","u","i"]
    return vawel.includes(char);
}