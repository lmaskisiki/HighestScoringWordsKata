describe("highestScoringWord", function () {
    describe("high", function () {
        describe("Given one word", function () {
            it("Should return the same word", function () {
                //Arrange
                let sut = new highestScoringWord();
                //Act   
                let result = sut.high("hello");
                //Assert
                expect(result).toBe("hello");;
            })
        });

        describe("Given sentence 'an apple'", function () {
            it("Should return 'apple' as the highest scoring word", function () {
                //Arrange
                let sut = new highestScoringWord();
                //Act   
                let result = sut.high("an apple");
                //Assert
                expect(result).toBe("apple");
            })
        });

        describe("Given sentence 'a girl'", function () {
            it("Should return 'girl' as the highest scoring word", function () {
                //Arrange
                let sut = new highestScoringWord();
                //Act   
                let result = sut.high("a girl");
                //Assert
                expect(result).toBe("girl");
            })
        });
     });
});

function highestScoringWord() {
    return {
        high: function (sentence) {
            let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            let processed =[];
            let words  = sentence.split(" ");
            words.forEach(word => {
                let wordSum=0
                for (let index = 0; index < word.length; index++) {
                     wordSum+=(letters.indexOf(word[index])+1);
                 }
                 processed.push(wordSum);
             });
             return words[processed.indexOf(Math.max.apply(Math, processed))]
        }
    }
}