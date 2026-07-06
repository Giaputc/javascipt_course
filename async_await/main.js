console.log("1. Bắt đầu nấu ăn");

function nauCom() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Cơm chín");
              console.log("mất 2s");
            resolve("Cơm");
        }, 2000); 
    });
}

function nauCanh() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4. Canh chín");
            console.log("mất 1s")
            resolve("Canh");
        }, 1000); 
    });
}

async function nauAn() {
    console.log("2. Bắt đầu nấu cơm và canh cùng lúc");
    
    const [com, canh] = await Promise.all([
        nauCom(),
        nauCanh()
    ]);
    
    console.log(`5. Đã có: ${com} và ${canh}`);
    console.log("6. Ăn cơm 🍚");
}
nauAn();