var strings = ['João', 'Pedro', 'Gabriel'];

strings_alta = strings.map(function caps(nome){
    return nome.toUpperCase();
})
console.log(strings_alta);