
const board=()=>{

    let arr=[[0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8]] // x/0 oynasi
    return arr;

}


const chose=()=>{
    const chose=+prompt("2 kishi bn o'ynash yoki komputer bilan o'ynash (1/0):");
    return chose;
}

const check=(arr, perarr)=>{
    if ((arr[0][0]=='x' && arr[0][1]=='x' && arr[0][2]=='x') ||
        (arr[0][0]=='x' && arr[1][0]=='x' && arr[2][0]=='x') ||
        (arr[0][1]=='x' && arr[1][1]=='x' && arr[2][1]=='x') ||
        (arr[0][1]=='x' && arr[1][1]=='x' && arr[2][1]=='x') ||
        (arr[1][0]=='x' && arr[1][1]=='x' && arr[1][2]=='x') ||
        (arr[2][0]=='x' && arr[2][1]=='x' && arr[2][2]=='x') ||
        (arr[0][0]=='x' && arr[1][1]=='x' && arr[2][2]=='x') ||
        (arr[0][2]=='x' && arr[1][1]=='x' && arr[2][0]=='x'))
        {
            return "WINNER PERSON1";
        }
    else if((arr[0][0]=='o' && arr[0][1]=='o' && arr[0][2]=='o') ||
            (arr[0][0]=='o' && arr[1][0]=='o' && arr[2][0]=='o') ||
            (arr[0][1]=='o' && arr[1][1]=='o' && arr[2][1]=='o') ||
            (arr[0][1]=='o' && arr[1][1]=='o' && arr[2][1]=='o') ||
            (arr[1][0]=='o' && arr[1][1]=='o' && arr[1][2]=='o') ||
            (arr[2][0]=='o' && arr[2][1]=='o' && arr[2][2]=='o') ||
            (arr[0][0]=='o' && arr[1][1]=='o' && arr[2][2]=='o') ||
            (arr[0][2]=='o' && arr[1][1]=='o' && arr[2][0]=='o'))
        {
            return "WINNER PERSON2";
        
        } else if(perarr.length==9){
            return "DRAW";
        }

}

const check_computer=(arr, newarr)=>{
    if ((arr[0][0]=='x' && arr[0][1]=='x' && arr[0][2]=='x') ||
        (arr[0][0]=='x' && arr[1][0]=='x' && arr[2][0]=='x') ||
        (arr[0][1]=='x' && arr[1][1]=='x' && arr[2][1]=='x') ||
        (arr[0][1]=='x' && arr[1][1]=='x' && arr[2][1]=='x') ||
        (arr[1][0]=='x' && arr[1][1]=='x' && arr[1][2]=='x') ||
        (arr[2][0]=='x' && arr[2][1]=='x' && arr[2][2]=='x') ||
        (arr[0][0]=='x' && arr[1][1]=='x' && arr[2][2]=='x') ||
        (arr[0][2]=='x' && arr[1][1]=='x' && arr[2][0]=='x'))
        {
            return "WINNER PERSON";
        }
    else if((arr[0][0]=='o' && arr[0][1]=='o' && arr[0][2]=='o') ||
            (arr[0][0]=='o' && arr[1][0]=='o' && arr[2][0]=='o') ||
            (arr[0][1]=='o' && arr[1][1]=='o' && arr[2][1]=='o') ||
            (arr[0][1]=='o' && arr[1][1]=='o' && arr[2][1]=='o') ||
            (arr[1][0]=='o' && arr[1][1]=='o' && arr[1][2]=='o') ||
            (arr[2][0]=='o' && arr[2][1]=='o' && arr[2][2]=='o') ||
            (arr[0][0]=='o' && arr[1][1]=='o' && arr[2][2]=='o') ||
            (arr[0][2]=='o' && arr[1][1]=='o' && arr[2][0]=='o'))
        {
            return "WINNER COMPUTER";
        
        } else if(newarr.length==9){
            return "DRAW";
        }

}

const game=(board)=>{
    let person1, person2; // 2 kishi o'zgaruvchilari   
    console.log(board);
    

    let perarr=[];// person array. Person qo'shgan raqamlari yig'ib boradi
    let count=9 // while aylanishi uchun o'zgaruvchi
    let result=''; // check funksiyadan qaytgan o'zgaruvchini saqlaydi
    
    while (count){
        person1=+prompt(" 1 ishtirokchi tanlang?");
        for (let i = 0; i < board.length; i++) {
            const element = board[i];
            for(let j=0; j<element.length; j++){
                if(element[j]==person1){
                    element[j]='x';
                    perarr.push(person1);
                }
                result = check(board, perarr);
            }
        }
        
        console.log(board);

        if(result == 'WINNER PERSON1' || result == 'DRAW'){
            count=0;
        }

        
        if(count){
            person2=+prompt("2 ishtirokchi tanlang?");
            for (let i = 0; i < board.length; i++) {
                const element = board[i];
                for(let j=0; j<element.length; j++){
                    if(element[j]==person2){
                        element[j]='o';
                        perarr.push(person2);
                    }
                    result = check(board, perarr);
                }
            }
        }
        if(count>0)
            count--;
        
        if(result == 'WINNER PERSON2' || result == 'DRAW'){
            count=0;
        } 
        

        console.log(board);
        console.log(result);
    }
}

function random_check(smart, arr){
    let result=1;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==smart){
            result=0;
        }else if(arr.length==9){
            result=0;
        }
    }
    return result;
}



const computer=(board)=>{
    let person; //1 kishi o'ynaganda o'zgaruvchi
    let smart; // random son o'zgaruvchi
    let double=1; // randomni aylanishi uchun o'zgaruvchi
    let newarr=[]; // odam va computer tanlagan sonlarni yig'uvchi o'zgaruvchi
    console.log(board);

    let count=9; // while aylanishi uchun o'zgaruvchi
    let result=''; // check_computerdan qaytdan qiymatni saqlovchi o'zgaruchi

    while (count){
        person=+prompt("Tanglang");
        for (let i = 0; i < board.length; i++) {
            const element = board[i];
            for(let j=0; j<element.length; j++){
                if(element[j]==person){
                    element[j]='x';
                    newarr.push(person);
                }
                result = check_computer(board, newarr);
            }
        }

        console.log(board);

        if(result == 'WINNER PERSON' || result == 'DRAW'){
            count=0;
        }
        
        console.log(result);
        
        while (double>0){
            smart = Math.floor((Math.random())*9);
            let son1=random_check(smart, newarr);
            if(son1==1 || son1==2){
                double=0;
            }
            
        }
        
        double=1;

        if(count){
            
            for (let i = 0; i < board.length; i++) {
                const element = board[i];
                for(let j=0; j<element.length; j++){
                    if(element[j]==smart){
                        element[j]='o';
                        newarr.push(smart);
                    }
                    result = check_computer(board, newarr);
                }
            }
        }
        
        if(result == 'WINNER COMPUTER' || result == 'DRAW'){
            count=0;
        } 
    
        console.log(board);
        console.log(result);

        
        if(count>0)
            count--;
    }
}


let ch=chose();

if(ch){
    game(board()); // 2 kishi o'ynashi uchun funksiya
} else if(ch==0){
    computer(board()); // odam va komputer o'yanshi uchun funksiya
} throw new Error("Faqat 1 yoki 0 kiriting:")

