function createPerson(name, age) {
    const _name = name;
    const _age = age;

    function getName() {
        return _name;
    }

    const getAge = () => _age;

    return { getName, getAge };
}

const obj = createPerson('Jane Doe', 33);
console.log(obj);