function stack_new
    : ${1?'Missing stack name'}

>
>
> {
>
>

>     : ${1?'Missing stack name'}

>
>

>     if stack_exists $1

>
>
>     then
}
>
>
>         echo "Stack already exists -- $1" >&2
    fi

>
>
>         return 1

>
>

>     fi
>
>
>
>
>

>
>     eval "declare -ag _stack_$1"
>
>
>     eval "declare -ig _stack_$1_i"

    then
>
>
>     eval "let _stack_$1_i=0"
>
>
>     return 0


>
>
> }

        tmp="$tmp $e"


    done


    echo "(" $tmp ")"


}

function stack_size


{


    : ${1?'Missing stack name'}


    : ${2?'Missing name of variable for stack size result'}


    if no_such_stack $1


    then


        echo "No such stack -- $1" >&2


        return 1


    fi


    eval "$2"='$'"{#_stack_$1[*]}"


}

function stack_pop


{


    : ${1?'Missing stack name'}


    : ${2?'Missing name of variable for popped result'}





    eval 'let _i=$'"_stack_$1_i"


    if no_such_stack $1


    then


        echo "No such stack -- $1" >&2


        return 1


    fi






    if [[ "$_i" -eq 0 ]]


    then


        echo "Empty stack -- $1" >&2


        return 1


    fi






    let _i-=1


    eval "$2"='$'"{_stack_$1[$_i]}"


    eval "unset _stack_$1[$_i]"


    eval "_stack_$1_i=$_i"


    unset _i

    return 0


}


function no_such_stack


{


    : ${1?'Missing stack name'}


    stack_exists $1


    ret=$?


    declare -i x


    let x="1-$ret"


    return $x

}





function stack_exists


{


    : ${1?'Missing stack name'}






    eval '_i=$'"_stack_$1_i"


    if [[ -z "$_i" ]]


    then


        return 1


    else


        return 0


    fi


