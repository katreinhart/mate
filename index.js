const { describe, it, xdescribe, xit } = require('./mate.js')
const { expect } = require('chai')

describe('tests to test the framework', function(){

  it('passing assertion 1', function(){
    expect(1).to.equal(1)
  })

  xit('failing assertion 1', function(){
    expect(1).to.equal(2)
  })

  xit('passing assertion 2', function(){
    expect('string').to.equal('string')
  })

  it('failing assertion 2', function(){
    expect('string').to.equal('other string')
  })

  it('passing assertion 3', function(){
    expect(true).to.equal(true)
  })

  it('failing assertion 3', function(){
    expect(true).to.equal(false)
  })

  it('passing assertion 4', function(){
    expect(null).to.equal(null)
  })

  it('failing assertion 4', function(){
    expect(null).to.equal(1)
  })

  it('passing assertion 5', function(){
    expect(undefined).to.equal(undefined)
  })

  it('failing assertion 5', function(){
    expect(undefined).to.equal(2)
  })

  it('passing assertion 6', function(){
    expect([1,2,3,4]).to.eql([1,2,3,4])
  })

  it('failing assertion 6', function(){
    expect([1,2,3,4]).to.eql([1,2,3])
  })

  it('passing assertion 7', function(){
    expect({a:1,b:2,c:3}).to.eql({a:1,b:2,c:3})
  })

  it('failing assertion 7', function(){
    expect({a:1,b:2,c:3}).to.eql({a:1,b:2})
  })
})
