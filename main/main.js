module.exports = function main(input) {
	var fig = new Array(3*(input.length))
	var text
	var a
	for(var i=0;i<input.length;i++)
	{
		if(input[i]=='0')
		{
			fig[i]="._."
			fig[i+input.length]="|.|"
			fig[i+input.length*2]="|_|"
		}
		else if(input[i]=='1')
		{
			fig[i]="..."
			fig[i+input.length]="..|"
			fig[i+input.length*2]="..|"
		}
		else if(input[i]=='2')
		{
			fig[i]="._."
			fig[i+input.length]="._|"
			fig[i+input.length*2]="|_."
		}
		else if(input[i]=='3')
		{
			fig[i]="._."
			fig[i+input.length]="._|"
			fig[i+input.length*2]="._|"
		}
		else if(input[i]=='4')
		{
			fig[i]="..."
			fig[i+input.length]="|_|"
			fig[i+input.length*2]="..|"
		}
		else if(input[i]=='5')
		{
			fig[i]="._."
			fig[i+input.length]="|_."
			fig[i+input.length*2]="._|"
		}
		else if(input[i]=='6')
		{
			fig[i]="._."
			fig[i+input.length]="|_'"
			fig[i+input.length*2]="|_|"
		}
		else if(input[i]=='7')
		{
			fig[i]="._."
			fig[i+input.length]="..|"
			fig[i+input.length*2]="..|"
		}
		else if(input[i]=='8')
		{
			fig[i]="._."
			fig[i+input.length]="|_|"
			fig[i+input.length*2]="|_|"
		}
		else if(input[i]=='9')
		{
			fig[i]="._."
			fig[i+input.length]="|_|"
			fig[i+input.length*2]="..|"
		}
	}
	for(var i=0;i<3*(input.length);i++)
	{
		console.log(fig[i]+" ")
		if((i+1)%3==0)
			console.log("\n")
	}
	a=parseInt(input)
	return a
    console.log("Debug Info");
    return 'Hello World!';
};