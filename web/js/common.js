var vendor = '../vendor/';
requirejs.config({
    paths: {
        domReady:        vendor + 'requirejs-domready/domReady',
        jquery:          vendor + 'jquery/dist/jquery.min',
        jqueryui:        vendor + 'jquery-ui/jquery-ui.min',
        bootstrap:       vendor + 'bootstrap/dist/js/bootstrap.min',
        typeahead:       vendor + 'typeahead.js/dist/typeahead.bundle.min',
        angular:         vendor + 'angular/angular.min',
        dropzone:        vendor + 'dropzone/dist/min/dropzone.min',
        select2:         vendor + 'select2/select2.min',
        ckeditor:        vendor + 'ckeditor/ckeditor',
        jckeditor:       vendor + 'ckeditor/adapters/jquery',
        ace:             vendor + 'ace/lib/ace',
        highlightjs:     vendor + 'highlightjs/highlight.pack',
        jstree:          vendor + 'jstree/dist/jstree.min',
        bootbox:         vendor + 'bootbox/bootbox',
        summernote:      vendor + 'summernote/dist/summernote.min',
        datatables:      vendor + 'datatables/media/js/jquery',
        datatablesjs:    vendor + 'datatables/media/js/jquery.dataTables.min',
        angular_file_upload: vendor + 'angular-file-upload/angular-file-upload.min',

        react:           vendor + 'react/react',
        flux:            vendor + 'flux/dist/Flux',
        'event-emitter':   vendor + 'eventEmitter/EventEmitter.min'
    },
    shim: {
        dropzone:        ['jquery'],
        jqueryui:        ['jquery'],
        bootstrap:       ['jquery'],
        bttrlazyloading: ['jquery'],
        angular:         ['jquery'],
        summernote:      ['jquery', 'bootstrap'],
        typeahead:       ['bootstrap'],
        select2:         ['bootstrap'],
        bootbox:         ['bootstrap'],
        jckeditor:       ['jquery', 'ckeditor'],
        datatables:      ['jquery', 'datatablesjs'],
        angular_file_upload: ['angular']
    }
});
