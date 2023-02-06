// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput70")
                .setLeft("3.0476190476190474em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Raw Capacity")
                .setType("number")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput72")
                .setLeft("3.0476190476190474em")
                .setTop("12.19047619047619em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Usable Capacity")
                .setType("number")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label14")
                .setLeft("3.8095238095238093em")
                .setTop("17.523809523809526em")
                .setCaption("Drive Devices")
            );
            
            append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1")
                .setItems([
                    {
                        "id" : "f",
                        "caption" : "Forward Sizing",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "r",
                        "caption" : "Reverse Sizing",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
                .setLeft("2.2857142857142856em")
                .setTop("1.5238095238095237em")
                .setWidth("39.695238095238096em")
                .setHeight("6.628571428571429em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("DDN Aurora Simple Sizer")
                .setLabelHAlign("left")
                .setValue("f")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setLeft("11.047619047619047em")
                .setTop("17.523809523809526em")
                .setCaption("0")
                .setWidth("10em")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});