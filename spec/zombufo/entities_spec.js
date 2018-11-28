describe('zombufo.entity', function() {
  var entity;

  beforeEach(function() {
    entity = require('../../src/zombufo/entity');
  });

  it('is a function', function() {
    expect(typeof entity).toBe('function');
  });

  describe('when constructor exists', function() {
    var entity_name;
    var entity_constructor;

    beforeEach(function() {
      entity_name = 'Test Entity 1';
      entity_constructor = function(attr) {
        return { foo: 4378, bar: attr };
      }
      entity(entity_name, entity_constructor);
    });

    describe('and creating an instance from that constructor', function() {
      var instance;

      beforeEach(function() {
        instance = entity(entity_name);
      });

      it('returns the result determined by the constructor', function() {
        expect(instance.foo).toBe(4378);
        expect(instance.bar).toBeUndefined();
      });

      describe('with constructor configuration/arguments', function() {
        var config = 7462;

        beforeEach(function() {
          instance = entity(entity_name, config);
        });

        it('returns the result determined by the constructor', function() {
          expect(instance.foo).toBe(4378);
          expect(instance.bar).toBe(config);
        });
      });
    });

    describe('.entity_constructors', function() {
      var entity_constructors;

      beforeEach(function() {
        entity_constructors = entity.entity_constructors;
      });

      it('has a property named with the constructor name', function() {
        expect(entity_constructors.hasOwnProperty(entity_name)).toBe(true);
      });

      it('has entity constructor as value of property with name of entity', function() {
        expect(entity_constructors[entity_name]).toBe(entity_constructor);
      });
    });
  });

  describe('.entity_constructors', function() { // I know this is implementation but wth
    var entity_constructors;

    beforeEach(function() {
      entity_constructors = entity.entity_constructors;
    });

    it('is (initially) an empty object', function() {
      var serialized = JSON.stringify(entity_constructors);
      expect(serialized).toBe('{}');
    });

  });

});