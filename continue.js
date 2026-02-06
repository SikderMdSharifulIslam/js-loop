for(let i = 1; i < 10; i++)
{
    if(i % 2 === 0)
    {
        continue;
    }
    console.log(i);

}

// while e continue
let n = 1, x;

while(n < 10)
{
    x=n;
    n++; 
    //continue statement er upore dite hobe while loop e, otherwise infinty loop hote pare
    // 0 theke loop start hole abr x variable lagto na.

    if(x % 2 === 0)
    {
        continue;
    }

    console.log(x);
}