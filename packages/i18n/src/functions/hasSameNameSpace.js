const fs = require('fs');
const path = require('path');

const hasSameNameSpace = () => {
    const fileName = `${process.argv[2]}.json`;

    if (!fileName) {
        console.error('파일명을 입력해주세요.');
        process.exit(1); // 오류 발생 시 프로그램 종료
    }

    const baseDirectory = path.join(__dirname, '../locales');

    const directories = fs.readdirSync(baseDirectory);

    const keyList = [];

    directories.forEach((directory) => {
        const directoryPath = path.join(baseDirectory, directory);
        const stats = fs.statSync(directoryPath);
        if (stats.isDirectory()) {
            const filePath = path.join(directoryPath, fileName);
            const jsonData = fs.readFileSync(filePath, 'utf-8');
            const obj = JSON.parse(jsonData);
            const keys = Object.keys(obj);
            keys.sort();
            keyList.push({ directory, keys });
        }
    });

    let differenceList = [];

    let allEqual = true;

    for (let val of keyList) {
        if (JSON.stringify(val.keys) === JSON.stringify(keyList[0].keys)) {
            allEqual = true;
        } else {
            let difference = keyList[0].keys
                .filter((x) => !val.keys.includes(x))
                .concat(val.keys.filter((x) => !keyList[0].keys.includes(x)));

            differenceList = [...differenceList, ...difference];

            allEqual = false;
        }
    }

    // 키 비교
    if (allEqual) {
        console.log('해당 JSON 파일의 키 값이 동일합니다.');
    } else {
        differenceList.forEach((el) => console.error(`${el}: 서로 다른 값이 추가 되어 있습니다.`));
    }
};

hasSameNameSpace();
