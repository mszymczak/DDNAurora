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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("18.285714285714285em")
                .setTop("14.476190476190476em")
                .setWidth("9.980952380952381em")
                .setCaption("Raw Capacity")
                .setHAlign("center")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setLeft("18.285714285714285em")
                .setTop("16em")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("29.714285714285715em")
                .setTop("14.476190476190476em")
                .setWidth("9.980952380952381em")
                .setCaption("Usable Capacity")
                .setHAlign("center")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setLeft("29.714285714285715em")
                .setTop("16em")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input11")
                .setLeft("18.285714285714285em")
                .setTop("34.285714285714285em")
                .setMask("u-11-ll-aa(**)")
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