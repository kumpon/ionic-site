---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "modalcontroller"
title: "ModalController"
header_sub_title: "Ionic API Documentation"
doc: "ModalController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/modal/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="modal-controller" href="#modal-controller"></a>

ModalController





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/modal/modal.ts#L69">
Improve this doc
</a>






<p>A Modal is a content pane that goes over the user&#39;s current page.
Usually it is used for making a choice or editing an item. A modal uses the
<code>NavController</code> to
<a href='/docs/v2/api/components/nav/NavController/#present'>present</a>
itself in the root nav stack. It is added to the stack similar to how
<a href='/docs/v2/api/components/nav/NavController/#push'>NavController.push</a>
works.</p>
<p>When a modal (or any other overlay such as an alert or actionsheet) is
&quot;presented&quot; to a nav controller, the overlay is added to the app&#39;s root nav.
After the modal has been presented, from within the component instance The
modal can later be closed or &quot;dismissed&quot; by using the ViewController&#39;s
<code>dismiss</code> method. Additionally, you can dismiss any overlay by using <code>pop</code>
on the root nav controller.</p>
<p>Data can be passed to a new modal through <code>Modal.create()</code> as the second
argument. The data can then be accessed from the opened page by injecting
<code>NavParams</code>. Note that the page, which opened as a modal, has no special
&quot;modal&quot; logic within it, but uses <code>NavParams</code> no differently than a
standard page.</p>





<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">import { ModalController, NavParams } from &#39;ionic-angular&#39;;

@Component(...)
class HomePage {

 constructor(private modalCtrl: ModalController) {

 }

 presentProfileModal() {
   let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
   profileModal.present();
 }

}

@Component(...)
class Profile {

 constructor(params: NavParams) {
   console.log(&#39;UserId&#39;, params.get(&#39;userId&#39;));
 }

}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="create"></div>

<h3>
<a class="anchor" name="create" href="#create"></a>
<code>create(componentType,&nbsp;data,&nbsp;opts)</code>
  

</h3>

Create a modal to display. See below for options.



<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        componentType
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The Modal view</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        data
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any data to pass to the Modal view</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Modal options</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>showBackdrop</td>
<td><code>boolean</code></td>
<td>Whether to show the backdrop. Default true.</td>
</tr>
<tr>
<td>enableBackdropDismiss</td>
<td><code>boolean</code></td>
<td>Whether the popover should be dismissed by tapping the backdrop. Default true.</td>
</tr>
</tbody>
</table>
<p>A modal can also emit data, which is useful when it is used to add or edit
data. For example, a profile page could slide up in a modal, and on submit,
the submit button could pass the updated profile data, then dismiss the
modal.</p>
<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;
import { ModalController, ViewController } from &#39;ionic-angular&#39;;

@Component(...)
class HomePage {

 constructor(private modalCtrl: ModalController) {

 }

 presentContactModal() {
   let contactModal = this.modalCtrl.create(ContactUs);
   contactModal.present();
 }

 presentProfileModal() {
   let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
   profileModal.onDidDismiss(data =&gt; {
     console.log(data);
   });
   profileModal.present();
 }

}

@Component(...)
class Profile {

 constructor(private viewCtrl: ViewController) {

 }

 dismiss() {
   let data = { &#39;foo&#39;: &#39;bar&#39; };
   this.viewCtrl.dismiss(data);
 }

}
</code></pre>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#modals'>Modal Component Docs</a><!-- end content block -->


<!-- end body block -->

