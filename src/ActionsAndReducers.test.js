import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Reducer",()=>{
	it("should do nothing if a card is picked and game has finished",()=>{
		expect(true).toBe(false);
	});
	it("should start the game if a card is picked and game has not started, also anyup should be true",()=>{
		expect(true).toBe(false);
	});

	it("do nothing if the game is blocked and action is not unblock",()=>{
		expect(true).toBe(false);
	});
	it("should unblock the game if it is blocked and action is unblock",()=>{
		expect(true).toBe(false);
	});
	it("should start the game if a card is picked and game has not started, also anyup should be true",()=>{
		expect(true).toBe(false);
	});
	it("it should increment upSidePairs if both picked cards are the same",()=>{
		expect(true).toBe(false);
	});
	it("it should finish and set hasWon when card is picked and upsidePairs get to 10",()=>{
		expect(true).toBe(false);
	});
	it("should count down if both picked cards are different,also should toggle picked cell's field to not shown",()=>{
		expect(true).toBe(false);
	});
	it("should end the game when card is picked and chances have gone to 0",()=>{
		expect(true).toBe(false);
	});
	it("it should toggle the cell's show field to view when card is picked, the game is running and it's not blocked ",()=>{
		expect(true).toBe(false);
	});
})