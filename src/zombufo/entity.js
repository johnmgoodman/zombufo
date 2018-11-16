var define_entity = function(entity_name, constructor) {
  e.entity_constructors[entity_name] = constructor;
};

var construct_entity = function(entity_name, attr) {
  return e.entity_constructors[entity_name](attr);
};

var e = module.exports = function(entity_name, arg1) {
  if(typeof arg1 === 'function') {
    return define_entity(entity_name, arg1);
  }

  return construct_entity(entity_name, arg1);
};

e.entity_constructors = {};