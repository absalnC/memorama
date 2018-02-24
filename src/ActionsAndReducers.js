const initial={
	blocked:false,
	hasStarted:false,
	hasFinished:false,
	hasWon:false,
	cells:[[]],
	anyUp:false,
	picked:null,
	upsidePairs:0,
	chances:5
}

function reducer (state,action){

}

function actionShow(row,col){
	return{
		type:"SHOW",
		row:row,
		col:col
	}
}

function actionHide(row,col){
	return{
		type:"HIDE",
		row:row,
		col:col
	}
}

const restart ={
	type:"RESTART"
}
const block={
	type:"BLOCK"
}
const unblock={
	type:"UNBLOCK"
}

function pickACtion(row,col){
	return {
		type:"PICK",
		row:row,
		col:col
	}
}
export default reducer;