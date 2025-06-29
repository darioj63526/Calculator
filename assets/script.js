let output=document.getElementById("output_box")

function display(number)
{
    output_box.value+=number;
}

function clr()
{
    output_box.value=""
}

function calculate()
{
    try
    {
        output_box.value=eval(output_box.value)
    }
    catch(err)
    {
      alert("Invalid choice")
    }
}

function del()
{
    output_box.value=output_box.value.slice(0,-1)
}