/*
Custom configuration file for IWE
*/

CKEDITOR.editorConfig = function( config ) {
    //config.customConfig = '/imperia/jscript/iwe2/default_config.js';
    config.language = 'de';
    config.format_tags = 'p;h1;h2;h3';
    config.font_names = 'Verdana';
    // config.colorButton_colors = 'ffffff,000000,333333,e2001a';
    // config.fontSize_sizes = '16/16px;24/24px;48/48px;';
    config.stylesSet = [
    
        { name : 'roter Text', element : 'span', attributes : { 'style' : 'color: #e2001a'  } },
        { name : 'Emphasis', element : 'em' },
        { name : 'Marker: Yellow'   , element : 'span', styles : { 'background-color' : 'Yellow' } },
        // Object Styles
        {
            name : 'Bild links',
            element : 'img',
            attributes :
            {
                'style' : 'float: left; margin-right: 5px'
            }
        },
        {
            name : 'Bild rechts',
            element : 'img',
            attributes :
            {
                'style' : 'float: right; margin-left: 5px'
            }
        }
    ];
    

    
    config.toolbar_basic =
    [
         { name: 'document', items : [ 'Source','Save','NewPage','DocProps','Preview','Print' ] },
         { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','Undo','Redo' ] },
         { name: 'editing', items : [ 'Find','Replace','-','SelectAll','SpellChecker', 'Scayt' ] },
       
         { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','RemoveFormat' ] },
         { name: 'links', items : [ 'MAMAssetLink','Unlink','Anchor' ] },
         { name: 'paragraph', items : [ 'NumberedList','BulletedList','Outdent','Indent','Blockquote','CreateDiv','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
        
         { name: 'insert', items : [ 'MAMAsset','Flash','Table','HorizontalRule','SpecialChar','PageBreak' ] },

         { name: 'styles', items : [ 'Format','Font','FontSize' ] },
         { name: 'colors', items : [ 'TextColor','BGColor' ] },
         { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }

    ];

    config.toolbar_full =
    [
         { name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
         { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
         { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
         { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
         '/',
         { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
         { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
         { name: 'links', items : [ 'MAMAssetLink','Unlink','Anchor' ] },
         { name: 'insert', items : [ 'MAMAsset','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak' ] },
         '/',
         { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
         { name: 'colors', items : [ 'TextColor','BGColor' ] },
         { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
    ];

        config.toolbar_xs =
        [
            { name: 'basicstyles', items : [ 'Bold','Italic','Underline','-','RemoveFormat' ] },
            { name: 'links', items : [ 'MAMAssetLink','Unlink' ] },
            { name: 'insert', items : [ 'MAMAsset' ] },
            { name: 'styles', items : [ 'Format' ] }
       ];


};


