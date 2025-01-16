const ages=[32,28,29,16];
const result=ages.filter(checkAge);


function checkAge(age)
{
    return age>=18;
}
console.log(result);