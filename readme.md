###Usage:

    $("something that identifies a SINGLE jqm button object").mobileBadge({
        count: 5, //what number you want appearing on the badge
        position: "topleft", //where the badge should appear relative to button (
        //takes values "topleft" and "topright"
        classnames: "my_special_class" //to apply custom styling to the button
        //can also be an array of class names
    });


PLEASE NOTE THAT YOUR SELECTOR MUST ADDRESS A SINGLE JQM BUTTON

There are two reasons for this:

1. I haven't written logic to deal with a jQuery selector that produces more than one result, so don't try it

2. It's unlikely that you would have a whole set of buttons that would all need the same count (unless the counts are to also be specified in an array, but that's a slippery slope, involving ordering and so on)
