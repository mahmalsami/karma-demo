console.log("you rock Karma !");

var isTestOk = true;
                
it('should be Ok ' + isTestOk, function()
{
    expect(isTestOk).toEqual(true);
});